﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Ice4HU.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DbICE4HUEntities4 : DbContext
    {
        public DbICE4HUEntities4()
            : base("name=DbICE4HUEntities4")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Courses> Courses { get; set; }
        public virtual DbSet<Questions_> Questions_ { get; set; }
        public virtual DbSet<Survey_> Survey_ { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
    }
}
