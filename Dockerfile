# Build stage
FROM node:14 AS build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Main stage
FROM zachrc/django-react-base:latest

# Copy project
COPY . /app/

# Copy pre-built frontend files
COPY --from=build /app/frontend/build /app/frontend/build

# Collect static files
RUN python manage.py collectstatic --noinput

# Run migrations
RUN python manage.py makemigrations
RUN python manage.py migrate

# Run gunicorn
CMD gunicorn backend.wsgi:application --bind 0.0.0.0:8000