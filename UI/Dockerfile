FROM node:18 AS FRONTEND
COPY ./my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

FROM node:16 as BACKEND
COPY ./backend/ ./backend/
COPY --from=FRONTEND ./my-app/dist/my-app/ ./backend/dist/
RUN cd backend && npm install
EXPOSE 3000

CMD [ "node", "./backend/index.js" ]