import os


def ping_website():
    hostname = "chess.mohammadanwar.dev"  # Replace with your website
    os.system(f"ping -c 1 {hostname}")


if __name__ == "__main__":
    ping_website()
