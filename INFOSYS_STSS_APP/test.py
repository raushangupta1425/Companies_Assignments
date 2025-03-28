import yt_dlp
import os

url = "https://www.youtube.com/embed/QD7m7NMCfrY?si=eoS9l9BvPPd7WZmi"
current_folder = os.path.dirname(os.path.abspath(__file__))
output_path = current_folder+"/downloads/"

ydl_opts = {
    "format": "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]",  # Forces MP4 format
    "merge_output_format": "mp4",  # Ensures final output is MP4
    "outtmpl": f"{output_path}/%(title)s.%(ext)s",
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])
