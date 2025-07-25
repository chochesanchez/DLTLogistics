#!/bin/bash

# Function to display help message
show_help() {
  echo "DLT Logistics Development Script"
  echo
  echo "Usage: ./scripts/dev.sh [command]"
  echo
  echo "Commands:"
  echo "  setup     - Install dependencies and initialize database"
  echo "  start     - Start development server"
  echo "  docker    - Start development environment with Docker"
  echo "  test      - Run tests"
  echo "  lint      - Run linter"
  echo "  db:init   - Initialize database with sample data"
  echo "  db:reset  - Reset database"
  echo "  help      - Show this help message"
}

# Function to check if command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Function to setup project
setup() {
  echo "Setting up DLT Logistics development environment..."
  
  # Check for Node.js
  if ! command_exists node; then
    echo "Error: Node.js is not installed"
    exit 1
  fi

  # Install dependencies
  npm install

  # Copy environment file if it doesn't exist
  if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from example"
  fi

  # Initialize database
  npm run db:push
  npm run db:init

  echo "Setup complete! Run './scripts/dev.sh start' to start the development server"
}

# Function to start development server
start() {
  echo "Starting development server..."
  npm run dev
}

# Function to start Docker environment
docker_start() {
  echo "Starting Docker development environment..."
  docker-compose up --build
}

# Function to run tests
run_tests() {
  echo "Running tests..."
  npm test
}

# Function to run linter
run_lint() {
  echo "Running linter..."
  npm run lint
}

# Function to initialize database
db_init() {
  echo "Initializing database with sample data..."
  npm run db:init
}

# Function to reset database
db_reset() {
  echo "Resetting database..."
  npm run db:push -- --force-reset
  npm run db:init
}

# Main script logic
case "$1" in
  "setup")
    setup
    ;;
  "start")
    start
    ;;
  "docker")
    docker_start
    ;;
  "test")
    run_tests
    ;;
  "lint")
    run_lint
    ;;
  "db:init")
    db_init
    ;;
  "db:reset")
    db_reset
    ;;
  "help"|"")
    show_help
    ;;
  *)
    echo "Unknown command: $1"
    echo "Run './scripts/dev.sh help' for usage information"
    exit 1
    ;;
esac 