# Use an official Python runtime as a parent image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Move back to the main directory
WORKDIR /app

# Collect static files
RUN python manage.py collectstatic --noinput

# Run gunicorn
CMD gunicorn backend.wsgi:application --bind 0.0.0.0:8000