using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace MOVYN_Api.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Adicione os DbSet para suas entidades
        public DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Usuario>().HasKey(c => c.Codigo);

            modelBuilder.Entity<Usuario>().Property(c => c.Codigo).ValueGeneratedOnAdd();
        }
    }
}