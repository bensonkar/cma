FROM node:13.3.0 AS compile-image

RUN npm install -g yarn

WORKDIR /opt/ng
COPY  package.json  ./
RUN yarn install --ignore-engines

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build --prod --aot --buildOptimizer --commonChunk --vendorChunk --optimization --progress

FROM nginx

COPY --from=compile-image /opt/ng/dist/ /usr/share/nginx/html