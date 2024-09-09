# Hypertube

## Description

A Movie streaming webapp using bittorent protocol

## Why ? 

Tired to pay a subscription for netflix, amazon prime, OBS, Disney+ etc..? Here you can just enjoy your movie  
without wasting time searching which platform are the movie you want to watch :)

## Quickstart

### Requirements:
    - docker with docker compose installed
    - .env file for both backend and frontend folder (you can find a sample in .env.example)
    - A vpn (required by our torrent fetching engine)

When you have all the requirements just run 
```bash
docker compose up --build
```
  
then navigate to localhost:8080 and enjoy your movie ! 

## Stack

- React
- Tailwind
- Django Rest Framework
- Expressjs
- PostgreSQL

## 🤝 Contributing

### Clone the repo

```bash
git clone https://github.com/jurichar/Ultratube
cd Ultratube
```

### Build and Run the project

```bash
docker compose --build
```

### Submit a pull request

If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.
