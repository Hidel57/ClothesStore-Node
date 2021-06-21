const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const productsControllers = require('../Controllers/productsControllers')
const usersControllers = require('../Controllers/usersControllers')
const authControllers = require('../Controllers/authControllers')

const routers = () => {
  router.get('/', productsControllers.Home)
  router.get('/products', productsControllers.Products)
  router.get('/product', productsControllers.Product)
  router.get('/contacts', productsControllers.Contacts)
  router.get('/about', productsControllers.About)
  router.get('/admin',
    // authControllers.authIsAuthenticated,
    productsControllers.Admin
  )
  router.get('/admin/categories/:url',
    // authControllers.authIsAuthenticated,
    productsControllers.AdminCategoryURL
  )

  /*
  * CRUD Categories
  */
  router.post('/create-category',
    body('name').not().isEmpty().trim().escape(),
    productsControllers.CreateCategory
  )
  /*
  * FORM PRODUCTS
  */
  router.get('/admin/create-product',
    // authControllers.authIsAuthenticated,
    productsControllers.FormCreateProduct
  )
  router.get('/admin/update-product/:id',
    // authControllers.authIsAuthenticated,
    productsControllers.FormEditProduct
  )
  /*
  * CRUD Products
  */
  router.post('/create-product',
    body('name').not().isEmpty().trim().escape(),
    // authControllers.authIsAuthenticated,
    productsControllers.CreateProduct
  )
  router.post('/update-product/:id',
    body('name').not().isEmpty().trim().escape(),
    // authControllers.authIsAuthenticated,
    productsControllers.UpdateProduct
  )
  router.get('/delete-product/:id', productsControllers.DeleteProduct)

  /*
  * Routes Sign in
  */
  router.get('/sign-in', usersControllers.GetSignin)
  router.post('/sign-in', usersControllers.PostSignin)
  /*
  * Routes Log in
  */
  router.get('/log-in', usersControllers.GetLogin)
  router.post('/log-in', authControllers.authUser)
  router.get('/log-out', authControllers.Logout)

  // Error 404
  router.get('/*', productsControllers.Error)
  return router
}

module.exports = { routers }
