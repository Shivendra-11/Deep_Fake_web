from flask import Flask, request, jsonify
# from your_ml_module import process_video  # Import your machine learning module or code here
from ml_model import make_prediction

app = Flask(__name__)

@app.route('/', methods=['POST'])
def predict():
    if 'video_file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    video_file = request.files['video_file']

    if video_file.filename == '':
        return jsonify({'error': 'No selected file'})

    try:
        prediction = make_prediction(video_file)
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})
@app.route('/result')
def result():
    prediction = request.args.get('prediction')
    return render_template('result.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)


   
