# Stage 1: Build Python wheels
FROM python:3.11-slim as builder

WORKDIR /wheels
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /wheels -r requirements.txt

# Stage 2: Final image
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Copy pre-built wheels and install
COPY --from=builder /wheels /wheels
COPY requirements.txt .
RUN pip install --no-cache /wheels/*

# Copy project files
COPY backend /app/backend
COPY manage.py .

# Collect static files
RUN python manage.py collectstatic --noinput

# Run migrations
RUN python manage.py makemigrations
RUN python manage.py migrate

CMD gunicorn backend.wsgi:application --bind 0.0.0.0:8000