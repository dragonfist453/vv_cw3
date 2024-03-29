FROM gillian:latest

LABEL maintaner "Karthik Ambu"

RUN mkdir /app/vv-cw3

WORKDIR /app/vv-cw3

CMD ["zsh"]