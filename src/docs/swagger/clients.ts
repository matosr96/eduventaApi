/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       properties:
 *         clientId:
 *           type: string
 *           description: The client Id
 *         name:
 *           type: string
 *           description: The name of the client
 *         phone:
 *           type: string
 *           description: The client's phone number
 *       required:
 *         - name
 *         - phone
 *         - clientId
 *       example:
 *         name: John Doe
 *         phone: "3009876543"
 *         clientId: 1
 *
 *     CreateClientDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the client
 *         phone:
 *           type: string
 *           description: The client's phone number
 *       required:
 *         - name
 *         - phone
 *       example:
 *         name: John Doe
 *         phone: "3009876543"
 */

/**
 * @swagger
 * /api/v1/clients:
 *   post:
 *     summary: Create a new client
 *     tags:
 *       - client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       '200':
 *         description: New user created!
 */

/**
 * @swagger
 * /api/v1/clients:
 *   get:
 *     summary: Get all clients
 *     tags:
 *       - client
 *     responses:
 *       '200':
 *         description: Clients obtained successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *       '404':
 *         description: No clients found
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/clients:
 *   put:
 *     summary: Update a client
 *     tags:
 *       - client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       '200':
 *         description: Client updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       '400':
 *         description: Bad Request - Invalid input
 *       '404':
 *         description: Client not found
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/clients/{clientId}:
 *   delete:
 *     summary: Delete a client
 *     tags:
 *       - client
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the client to be deleted
 *     responses:
 *       '200':
 *         description: Client deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the client was successfully deleted
 *               example:
 *                 success: true
 *       '404':
 *         description: Client not found
 *       '500':
 *         description: Internal Server Error
 */