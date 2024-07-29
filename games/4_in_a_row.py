import numpy as np
import pygame
import sys
import math

# RGB values
blue = (0,32, 255)
white = (234,234,234)
red = (255, 0, 0)
yellow = (255, 254, 0)

row_count = 6
col_count = 7

def create_board():
    board = np.zeros((row_count, col_count))
    return board

def drop_piece(board, row, col, piece):
    board[row][col] = piece

def valid_location(board, col):
    return board[row_count - 1][col] == 0

def next_open_row(board, col):
    for r in range(row_count):
        if board[r][col] == 0:
            return r

def print_board(board):
    print(np.flip(board, 0))

def winning_move(board, piece):
    # Check horizontal locations for win
    for c in range(col_count-3):
        for r in range(row_count):
            if board[r][c] == piece and board[r][c+1] == piece and board[r][c+2] == piece and board[r][c+3] == piece:
                return True

    # Check vertical locations for win
    for c in range(col_count):
        for r in range(row_count-3):
            if board[r][c] == piece and board[r+1][c] == piece and board[r+2][c] == piece and board[r+3][c] == piece:
                return True

    # Check positively sloped diagonals
    for c in range(col_count-3):
        for r in range(row_count-3):
            if board[r][c] == piece and board[r+1][c+1] == piece and board[r+2][c+2] == piece and board[r+3][c+3] == piece:
                return True

    # Check negatively sloped diagonals
    for c in range(col_count-3):
        for r in range(3, row_count):
            if board[r][c] == piece and board[r-1][c+1] == piece and board[r-2][c+2] == piece and board[r-3][c+3] == piece:
                return True

def draw_board(board, screen, sq_size, radius):
    for c in range(col_count):
        for r in range(row_count):
            pygame.draw.rect(screen, blue, (c * sq_size, r * sq_size + sq_size, sq_size, sq_size))
            pygame.draw.circle(screen, white, (int(c * sq_size + sq_size / 2), int(r * sq_size + sq_size + sq_size / 2)), radius)

    for c in range(col_count):
        for r in range(row_count):
            if board[r][c] == 1:
                pygame.draw.circle(screen, red, (int(c * sq_size + sq_size / 2), int(height - (r * sq_size + sq_size / 2))), radius)
            elif board[r][c] == 2:
                pygame.draw.circle(screen, yellow, (int(c * sq_size + sq_size / 2), int(height - (r * sq_size + sq_size / 2))), radius)
    pygame.display.update()

board = create_board()
print_board(board)
game_over = False
turn = 0

pygame.init()

sq_size = 100

width = col_count * sq_size
height = (row_count + 1) * sq_size

size = (width, height)

radius = int(sq_size / 2 - 5)

screen = pygame.display.set_mode(size)

draw_board(board, screen, sq_size, radius)

font = pygame.font.SysFont("monospace", 75)

while not game_over:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

        if event.type == pygame.MOUSEMOTION:
            pygame.draw.rect(screen, white, (0, 0, width, sq_size))
            posx = event.pos[0]
            if turn == 0:
                pygame.draw.circle(screen, red, (posx, int(sq_size/2)), radius)
            else:
                pygame.draw.circle(screen, yellow, (posx, int(sq_size/2)), radius)
        pygame.display.update()

        if event.type == pygame.MOUSEBUTTONDOWN:
            pygame.draw.rect(screen, white, (0, 0, width, sq_size))
            # Ask for Player 1 Input
            if turn == 0:
                posx = event.pos[0]
                col = int(math.floor(posx / sq_size))

                if valid_location(board, col):
                    row = next_open_row(board, col)
                    drop_piece(board, row, col, 1)

                    if winning_move(board, 1):
                        label = font.render("Player 1 wins!!", 1, red)
                        screen.blit(label, (40, 10))
                        game_over = True

            # Ask for Player 2 Input
            else:
                posx = event.pos[0]
                col = int(math.floor(posx / sq_size))

                if valid_location(board, col):
                    row = next_open_row(board, col)
                    drop_piece(board, row, col, 2)

                    if winning_move(board, 2):
                        label = font.render("Player 2 wins!!", 1, yellow)
                        screen.blit(label, (40, 10))
                        game_over = True

            print_board(board)
            draw_board(board, screen, sq_size, radius)

            turn += 1
            turn = turn % 2

            if game_over:
                pygame.time.wait(3000)
