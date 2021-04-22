﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TiendaDeMujica.Classes.Core;
using TiendaDeMujica.Models;

namespace TiendaDeMujica.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private TiendaDeMujicaDBContext dbContext;

        public OrderController(TiendaDeMujicaDBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                OrderCore orderCore = new OrderCore(dbContext);
                return Ok(orderCore.Get());
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] int id)
        {
            try
            {
                OrderCore orderCore= new OrderCore(dbContext);
                return Ok(orderCore.Get(id));
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] Order order)
        {
            try
            {
                OrderCore orderCore = new OrderCore(dbContext);

                orderCore.Create(order);
                return Ok("Added new order successfully!");
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] Order order, [FromRoute] int id)
        {
            try
            {
                OrderCore orderCore = new OrderCore(dbContext);

                orderCore.Update(order, id);
                return Ok("Order successfully edited!");
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Disable([FromRoute] int id)
        {
            try
            {
                OrderCore orderCore = new OrderCore(dbContext);

                orderCore.Disable(id);
                return Ok("Order successfully disabled!");
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
