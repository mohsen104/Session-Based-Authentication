/**
 * @swagger
 * tags:
 *  name: Dev
 *  description: Dev Module and Routes
 */

/**
 * @swagger
 *
 * /dev/loginMethod:
 *  post:
 *      summary: get login method 
 *      tags:
 *          -   Dev
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
 * /dev/generateCodeOtp:
 *  get:
 *      summary: get code otp 
 *      tags:
 *          -   Dev
 *      responses:
 *          200:
 *              description: success
 */