/*Program.cs - Daniel Syrén (20105070)*/
using Made_for_LeaversApi.Data;

internal class Program
{
    /*Main(string[] args) sets-up the program when is starts.*/
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddCors(policyBuilder =>
            policyBuilder.AddDefaultPolicy(policy =>
                policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader())
        );
        builder.Services.AddDbContext<Made_for_LeaversContext>();
        var app = builder.Build();
        app.UseCors();
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }

}