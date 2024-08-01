/*Made_for_LeaversContext.cs - Daniel Syrén (20105070)*/
using Made_for_LeaversApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace Made_for_LeaversApi.Data
{
    public class Made_for_LeaversContext : DbContext
    {
        public Made_for_LeaversContext(DbContextOptions<Made_for_LeaversContext> options)
            : base(options)
        {

        }

        public DbSet<University> Universities { get; set; }

        /*OnConfiguring(DbContextOptionsBuilder optionsBuilder) creates the connection to the Made_for_Leavers database.*/
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=14-dv1629na\\SQLEXPRESS01;Database =Made_for_Leavers;Integrated Security = true;TrustServerCertificate=True; Connect Timeout=60");
            base.OnConfiguring(optionsBuilder);
        }

    }

}
