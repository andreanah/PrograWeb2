﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TiendaDeMujica.Classes.Core;
using TiendaDeMujica.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaDeMujica.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FormatController : ControllerBase
    {
        private TiendaDeMujicaDBContext dbContext;

        public FormatController(TiendaDeMujicaDBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                FormatCore formatCore = new FormatCore(dbContext);
                return Ok(formatCore.Get());
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
                FormatCore formatCore = new FormatCore(dbContext);
                return Ok(formatCore.Get(id));
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] Format format)
        {
            try
            {
                FormatCore formatCore = new FormatCore(dbContext);
                /*Genre genre = new Genre
                {
                    GenreName = "Acid Jazz"
                };*/

                formatCore.Create(format);
                return Ok("Added new format successfully!");
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] Format format, [FromRoute] int id)
        {
            try
            {
                FormatCore formatCore = new FormatCore(dbContext);

                formatCore.Update(format, id);
                return Ok("Format successfully edited!");
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
                FormatCore formatCore = new FormatCore(dbContext);

                formatCore.Disable(id);
                return Ok("Format successfully disabled!");
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e);
            }
        }
    }
}