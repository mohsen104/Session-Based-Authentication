/**
 * @swagger
 * tags:
 *  name: User
 *  description: User Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Authentication:
 *              type: object
 *              required:
 *                  -   username
 *              properties:
 *                  username:
 *                      type: string
 *          LoginOtp:
 *              type: object
 *              required:
 *                  -   phone
 *                  -   otp
 *              properties:
 *                  phone:
 *                      type: string
 *                  otp:
 *                      type: number
 *          LoginPassword:
 *              type: object
 *              required:
 *                  -   username
 *                  -   password
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *          EmailUpdate:
 *              type: object
 *              required:
 *                  -   email
 *              properties:
 *                  email:
 *                      type: string
 *          PasswordUpdate:
 *              type: object
 *              required:
 *                  -   current_password
 *                  -   new_password
 *                  -   repeat_password
 *              properties:
 *                  current_password:
 *                      type: string
 *                  new_password:
 *                      type: string
 *                  repeat_password:
 *                      type: string
 */

/**
 * @swagger
 *
 * /user/authentication:
 *  post:
 *      summary: authentication
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Authentication'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Authentication'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 *
 * /user/login/otp:
 *  post:
 *      summary: login by otp
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginOtp'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginOtp'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 *
 * /user/login/password:
 *  post:
 *      summary: login by password
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginPassword'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginPassword'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 *
 * /user/email/update:
 *  post:
 *      summary: update email
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/EmailUpdate'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/EmailUpdate'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 *
 * /user/password/update:
 *  post:
 *      summary: update password
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/PasswordUpdate'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/PasswordUpdate'
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 *
 * /user/logout:
 *  get:
 *      summary: logout 
 *      tags:
 *          -   User
 *      responses:
 *          200:
 *              description: success
 */