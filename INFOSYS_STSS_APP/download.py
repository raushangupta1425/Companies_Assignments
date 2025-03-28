from flask import Flask, render_template, request, jsonify
import yt_dlp
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('YTVideoDownload.html')

@app.route('/download', methods=['POST'])
def download():
    try:
        url = request.form.get("link")
        current_folder = os.path.dirname(os.path.abspath(__file__))
        output_path = current_folder+"/downloads/"

        ydl_opts = {
            "format": "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]",  # Forces MP4 format
            "merge_output_format": "mp4",  # Ensures final output is MP4
            "outtmpl": f"{output_path}/%(title)s.%(ext)s",
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return jsonify({'message': 'Download successfully!'})
    except Exception as e:
        return jsonify({'message': 'File already exist!'})


# Run the app
if __name__ == '__main__':
    app.run(debug=True)