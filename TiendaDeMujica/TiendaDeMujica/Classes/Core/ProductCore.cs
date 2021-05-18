﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TiendaDeMujica.Models;
using TiendaDeMujica.Models.ViewModels;

namespace TiendaDeMujica.Classes.Core
{
    public class ProductCore
    {
        TiendaDeMujicaDBContext dBContext;
        public ProductCore(TiendaDeMujicaDBContext dBContext)
        {
            this.dBContext = dBContext;
        }

        public List<Product> Get()
        {
            try
            {
                return (from p in dBContext.Product
                        where p.Active == true
                        select p).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<Product> Get(int id)
        {
            try
            {
                return (from p in dBContext.Product
                        where p.Id == id && p.Active == true
                        select p).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public ProductFormatsViewModel GetProductFormats(int id)
        {
            try
            {
                var query = (from p in dBContext.Product
                             join pf in dBContext.ProductFormat on p.Id equals pf.IdProduct
                             join f in dBContext.Format on pf.IdFormat equals f.Id
                             where p.Id == id && p.Active == true
                             select new
                             {
                                 Id = p.Id,
                                 Name = p.Name,
                                 FormatCode = f.TypeCode,
                                 FormatType = f.Type
                             }).ToList();

                ProductFormatsViewModel productFormatsViewModel = query.GroupBy(x => (x.Id, x.Name)).Select(x => new ProductFormatsViewModel
                {
                    ProductName = x.Key.Name,
                    Formats = x.Select(y => new FormatsViewModel
                    {
                        Type = y.FormatType,
                        TypeCode = y.FormatCode
                    }).ToList()
                }).First();
                return productFormatsViewModel;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<ProductModel> GetProduct(int id)
        {
            try
            {
                var query = (from p in dBContext.Product
                             join ap in dBContext.ArtistProduct on p.Id equals ap.IdProduct into apD
                                from ap in apD.DefaultIfEmpty()
                             join a in dBContext.Artist on ap.IdArtist equals a.Id into aD
                                from a in aD.DefaultIfEmpty()
                             join pf in dBContext.ProductFormat on p.Id equals pf.IdProduct into pfD
                                from pf in pfD.DefaultIfEmpty()
                             join f in dBContext.Format on pf.IdFormat equals f.Id into fD
                                from f in fD.DefaultIfEmpty()
                             join g in dBContext.Genre on p.IdGenre equals g.Id
                             where p.Active == true && p.Id == id
                             select new
                             {
                                 IdProduct = p.Id,
                                 Description = p.Description,
                                 Price = p.Price,
                                 ProductName = p.Name,
                                 URLImage = p.URLImage,
                                 Format = f != null ? f : null,
                                 Artist = a != null ? a : null,
                                 GenreName = g.GenreName,
                             }).ToList();

                List<ProductModel> productModel = query.GroupBy(x => (x.IdProduct, x.ProductName,x.Price,x.GenreName, x.URLImage)).Select(x => new ProductModel
                {
                    IdProduct = x.Key.IdProduct,
                    ProductName = x.Key.ProductName,
                    Price = x.Key.Price,
                    Genre = x.Key.GenreName,
                    URLImage = x.Key.URLImage,
                    Formats = x.GroupBy(y => (y.Format?.Id, y.Format?.Type)).Select(z => z.Key.Type).ToList(),
                    ArtistName = x.GroupBy(y => (y.Artist?.Id,y.Artist?.StageName)).Select(z=>z.Key.StageName).ToList()
                }).ToList();
                return productModel;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<ProductModel> GetProduct()
        {
            try
            {
                var query = (from p in dBContext.Product
                             join ap in dBContext.ArtistProduct on p.Id equals ap.IdProduct into apD
                             from ap in apD.DefaultIfEmpty()
                             join a in dBContext.Artist on ap.IdArtist equals a.Id into aD
                             from a in aD.DefaultIfEmpty()
                             join pf in dBContext.ProductFormat on p.Id equals pf.IdProduct into pfD
                             from pf in pfD.DefaultIfEmpty()
                             join f in dBContext.Format on pf.IdFormat equals f.Id into fD
                             from f in fD.DefaultIfEmpty()
                             join g in dBContext.Genre on p.IdGenre equals g.Id
                             where p.Active == true
                             select new
                             {
                                 IdProduct = p.Id,
                                 Description = p.Description,
                                 Price = p.Price,
                                 ProductName = p.Name,
                                 URLImage = p.URLImage,
                                 Format = f != null ? f : null,
                                 Artist = a != null ? a : null,
                                 GenreName = g.GenreName,
                             }).ToList();

                List<ProductModel> productModel = query.GroupBy(x => (x.IdProduct, x.ProductName, x.Price, x.GenreName, x.URLImage)).Select(x => new ProductModel
                {
                    IdProduct = x.Key.IdProduct,
                    ProductName = x.Key.ProductName,
                    Price = x.Key.Price,
                    Genre = x.Key.GenreName,
                    URLImage = x.Key.URLImage,
                    Formats = x.GroupBy(y => (y.Format?.Id, y.Format?.Type)).Select(z => z.Key.Type).ToList(),
                    ArtistName = x.GroupBy(y => (y.Artist?.Id, y.Artist?.StageName)).Select(z => z.Key.StageName).ToList()
                }).ToList();
                return productModel;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<ProductModel> GetProductsByGenre(int idGenre)
        {
            try
            {
                var query = (from p in dBContext.Product
                             join ap in dBContext.ArtistProduct on p.Id equals ap.IdProduct into apD
                             from ap in apD.DefaultIfEmpty()
                             join a in dBContext.Artist on ap.IdArtist equals a.Id into aD
                             from a in aD.DefaultIfEmpty()
                             join pf in dBContext.ProductFormat on p.Id equals pf.IdProduct into pfD
                             from pf in pfD.DefaultIfEmpty()
                             join f in dBContext.Format on pf.IdFormat equals f.Id into fD
                             from f in fD.DefaultIfEmpty()
                             join g in dBContext.Genre on p.IdGenre equals g.Id
                             where p.Active == true && g.Id == idGenre
                             select new
                             {
                                 IdProduct = p.Id,
                                 Description = p.Description,
                                 Price = p.Price,
                                 ProductName = p.Name,
                                 URLImage = p.URLImage,
                                 Format = f != null ? f : null,
                                 Artist = a != null ? a : null,
                                 GenreName = g.GenreName,
                             }).ToList();

                List<ProductModel> productModel = query.GroupBy(x => (x.IdProduct, x.ProductName, x.Price, x.GenreName, x.URLImage)).Select(x => new ProductModel
                {
                    IdProduct = x.Key.IdProduct,
                    ProductName = x.Key.ProductName,
                    Price = x.Key.Price,
                    Genre = x.Key.GenreName,
                    URLImage = x.Key.URLImage,
                    Formats = x.GroupBy(y => (y.Format?.Id, y.Format?.Type)).Select(z => z.Key.Type).ToList(),
                    ArtistName = x.GroupBy(y => (y.Artist?.Id, y.Artist?.StageName)).Select(z => z.Key.StageName).ToList()
                }).ToList();
                return productModel;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Create(Product product)
        {
            try
            {
                bool validProduct = Validate(product);
                if (validProduct)
                {
                    dBContext.Add(product);
                    dBContext.SaveChanges();
                }
                else
                {
                    throw new Exception("Enter the data correctly");
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Update(Product product, int id)
        {
            try
            {
                bool validProduct = Validate(product);

                if (validProduct)
                {
                    bool existingProduct = dBContext.Product.Any(product => product.Id == id);
                    if (existingProduct)
                    {
                        product.Id = id;

                        dBContext.Attach(product);

                        dBContext.Entry(product).Property("Name").IsModified = true;
                        dBContext.Entry(product).Property("Price").IsModified = true;
                        dBContext.Entry(product).Property("Description").IsModified = true;

                        if (product.IdGenre != 0)
                            dBContext.Entry(product).Property("IdGenre").IsModified = true;

                        dBContext.SaveChanges();
                    }
                    else
                    {
                        throw new Exception("Enter a valid id");
                    }
                }
                else
                {
                    throw new Exception("Enter the data correctly");
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Disable(int id)
        {
            try
            {
                Product product = dBContext.Product.FirstOrDefault(x => x.Id == id);
                if (product != null)
                {
                    product.Active = false;
                    dBContext.Update(product);
                    dBContext.SaveChanges();
                }
                else
                {
                    throw new Exception("Enter a valid id");
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool Validate(Product product)
        {
            try
            {

                if (string.IsNullOrEmpty(product.Name) || float.IsNaN(product.Price))
                    return false;
                if (product.Name.Length > 50 || product.Description.Length > 255 || product.Price > 1000000)
                    return false;

                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
