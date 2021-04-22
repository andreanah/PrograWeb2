﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TiendaDeMujica.Models.ViewModels
{
    public class ProductFormatsViewModel
    {
        public string ProductName { get; set; }
        public List<FormatsViewModel> Formats { get; set; }
    }

    public class FormatsViewModel
    {
        public string TypeCode { get; set; }
        public string Type { get; set; }
    }
}