import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  SWAGGER_API_ROOT,
  SWAGGER_API_TITLE,
  SWAGGER_API_DESCRIPTION,
  SWAGGER_API_VERSION,
} from './constants';

const setSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_TITLE)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setVersion(SWAGGER_API_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_API_ROOT, app, document, {
    customSiteTitle: `${SWAGGER_API_TITLE} | GDG Rosario`,
  });
};

export default setSwagger;
