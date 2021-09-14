# NestJS-Docker-Example

NestJS + pkg + Docker를 이용한 도커 이미지 생성 예시

> macOS Big Sur 환경에서 진행되었습니다.

# 사전작업

## NestJS 설치

```
$ npm i -g @nestjs/cli

$ nest new nestjs-docker-example
```

## Docker 설치

```
$ brew install --cask docker
```

# 실행

```
$ yarn

$ yarn build:all
```

```
$ docker run -d --rm -p 3000:3000 nestjs-docker-example
```

# 테스트

## /

```
$ curl localhost:3000

> Hello World!
```

## /email

```
$ curl localhost:3000

> {"email":"KyungHwan, Min"}
```

## /name

```
$ curl localhost:3000

> {"email":"ber01@naver.com"}
```
