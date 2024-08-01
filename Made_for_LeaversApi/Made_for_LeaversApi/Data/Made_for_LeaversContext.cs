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
            optionsBuilder.UseSqlServer("Server=tcp:madeforleaverssql.database.windows.net,1433;Initial Catalog=Made_for_Leavers;Persist Security Info=False;User ID=x20105070;Password=ThisIstheEnd2013;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=120;");
            base.OnConfiguring(optionsBuilder);
        }

    }

}
