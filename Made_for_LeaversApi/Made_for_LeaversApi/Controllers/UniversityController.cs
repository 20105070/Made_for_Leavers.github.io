/*UniversityController.cs - Daniel Syrén (20105070)*/
using Made_for_LeaversApi.Data;
using Made_for_LeaversApi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Made_for_LeaversApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UniversityController : ControllerBase
    {

        private readonly Made_for_LeaversContext _context;

        /*UniversityController(Made_for_LeaversContext context) sets the value of _context.*/
        public UniversityController(Made_for_LeaversContext context)
        {
            _context = context;
        }

        [HttpGet("GetUniversity")]
        /*GetUniversity() loads all the universities from the database and returns them to the Angular front-end.*/
        public async Task<IEnumerable<University>> GetUniversity()
        {
            if (!Request.Headers.ContainsKey("Authorization"))
            {
                throw new UnauthorizedAccessException();
            }
            var email = Request.Headers.First(f => f.Key == "Authorization").Value.ToString();
            var universities = await _context.Universities.Where(u => u.Email == email)
                .ToListAsync();
            return universities;
        }

        [HttpDelete("DeleteUniversity/{name}")]
        /*DeleteUniversity(string name) deletes the university from the database with the name of name.*/
        public async Task<IActionResult> DeleteUniversity(string name)
        {
            if (!Request.Headers.ContainsKey("Authorization"))
            {
                throw new UnauthorizedAccessException();
            }
            var email = Request.Headers.First(f => f.Key == "Authorization").Value.ToString();
            var removeUni = await _context.Universities.Where(u => u.Email == email && u.Name == name).FirstOrDefaultAsync();
            if (removeUni != null)
            {
                _context.Universities.Remove(removeUni);
                await _context.SaveChangesAsync();
            }
            return NoContent();
        }

        [HttpPost("PostUniversity")]
        /*PostUniversity([FromBody] University university) inserts university into the database.*/
        public async Task<IActionResult> PostUniversity([FromBody] University university)
        {
            var isUni = await _context.Universities.AnyAsync(u => u.Email == university.Email && u.Name == university.Name);
            if (!isUni)
            {
                await _context.Universities.AddAsync(university);
                await _context.SaveChangesAsync();
            }
            return NoContent();
        }

    }

}
