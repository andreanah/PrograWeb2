﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaDeMujica.Models
{
    public class OrderProduct
    {
        public int Id { get; set; }
        public int IdProduct { get; set; }
        public string IdOrder { get; set; }
        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}
