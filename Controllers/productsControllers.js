const Products = require('../Models/Products')
const Categories = require('../Models/Categories')

exports.Home = (req, res) => {
  res.render('home', {
    namePage: 'Elegancy | Tienda online de ropa en Sucre Bolivia',
    description: 'Eleganty, realiza tus compras onlina en la comodidad de tu casa, ofrecemos a la venta variedad de ropas como ser zapatos, pantalones, chaquets, camisas, etc',
    keywords: 'Tienda, online, Sucre, Bolivia, ropas'
  })
}

exports.Products = async (req, res) => {
  let products
  await Products.findAll().then(results => { products = results })
  console.log(products)
  res.render('products', {
    products
  })
}

exports.Product = (req, res) => {
  res.render('product', {
    namePage: 'Elegancy | Product',
    description: 'Eleganty, Clothes',
    keywords: 'Elegancy, clothes'
  })
}

exports.Contacts = (req, res) => {
  res.render('contacts', {
    namePage: 'Elegancy | Contacts',
    description: 'Eleganty, Get in touch',
    keywords: 'Elegancy, address, phone, ubication'
  })
}

exports.About = (req, res) => {
  res.render('about', {
    namePage: 'Elegancy | Contacts',
    description: 'Eleganty, Get in touch',
    keywords: 'Elegancy, address, phone, ubication'
  })
}

exports.Admin = async (req, res) => {
  console.log(req.user)
  // let productsKey = []
  const productsPromise = Products.findAll()
  const categoriesPromise = Categories.findAll()
  const [products, categories] = await Promise.all([productsPromise, categoriesPromise])
  // if (products !== []) {
  //   productsKey = Object.keys(products[0].dataValues)
  //   productsKey.shift()
  //   productsKey.pop()
  // }
  res.render('admin', {
    categories,
    products
    // productsKey
  })
}

exports.Error = (req, res) => {
  res.send('Erro 404')
}

/**
 * CRUD CATEGORIES
*/
exports.CreateCategory = async (req, res) => {
  const { name } = req.body
  await Categories.create({ name })
  res.redirect('admin')
}

exports.AdminCategoryURL = async (req, res) => {
  const category = await Categories.findOne({ where: { url: req.params.url } })
  const products = await Products.findAll({ where: { categoryId: category.id } })
  console.log(products)
  res.send('lsito')
}
/**
 * FORM Products
*/
exports.FormCreateProduct = async (req, res) => {
  const categories = await Categories.findAll()
  res.render('formCreateProduct', { categories })
}
exports.FormEditProduct = async (req, res) => {
  const productEdit = await Products.findOne({ where: { id: req.params.id } })
  console.log(productEdit)
  res.render('formEditProduct', { productEdit })
}
/**
 * CRUD Products
*/
exports.CreateProduct = async (req, res) => {
  const { name, imgURL, size, color, price, categoryId } = req.body
  if (categoryId === '') {
    res.redirect('/admin/create-product')
  } else {
    await Products.create({ name, imgURL, size, color, price, categoryId })
    res.redirect('/admin')
  }
}
exports.UpdateProduct = async (req, res) => {
  const { name, imgURL, size, color, price } = req.body
  await Products.update(
    { name: name, imgURL: imgURL, size: size, color: color, price: price },
    { where: { id: req.params.id } }
  )
  res.redirect('/admin')
}
exports.DeleteProduct = async (req, res, next) => {
  await Products.destroy({ where: { id: req.params.id } })
  res.redirect('/admin')
  next()
}
