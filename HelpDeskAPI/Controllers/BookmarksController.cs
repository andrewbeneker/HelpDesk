using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HelpDeskAPI.Entities;
using HelpDeskAPI.Dtos;

namespace HelpDeskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly HelpDeskDbContext _context;

        public BookmarksController(HelpDeskDbContext context)
        {
            _context = context;
        }

        // GET: api/Bookmarks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookmark>>> GetBookmarks()
        {
            return await _context.Bookmarks.ToListAsync();
        }

        // GET: api/Bookmarks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookmark>> GetBookmark(int id)
        {
            var bookmark = await _context.Bookmarks.FindAsync(id);

            if (bookmark == null)
            {
                return NotFound();
            }

            return bookmark;
        }

        // PUT: api/Bookmarks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookmark(int id, BookmarkDto bookmarkDto)
        {
            if (!_context.Bookmarks.Any(b => b.Id == id))
            {
                return BadRequest();
            }
            else
            {
                var bookmarkEntity = new Bookmark()
                {
                    Id = id,
                    TicketId = bookmarkDto.TicketId,
                    Description = bookmarkDto.Description,
                    Ticket = null
                };

                _context.Bookmarks.Update(bookmarkEntity);
                _context.SaveChanges();
                return Ok("Bookmark updated successfully");
            }

        }

        // POST: api/Bookmarks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bookmark>> PostBookmark(BookmarkDto bookmarkDto)
        {

            var BookmarkEntity = new Bookmark()
            {
                TicketId = bookmarkDto.TicketId,
                Description = bookmarkDto.Description
            };

            _context.Bookmarks.Add(BookmarkEntity);
            await _context.SaveChangesAsync();

            return Ok("Bookmark added successfully");
        }

        // DELETE: api/Bookmarks/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteBookmark(int id)
        //{
        //    var bookmark = await _context.Bookmarks.FindAsync(id);
        //    if (bookmark == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Bookmarks.Remove(bookmark);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool BookmarkExists(int id)
        //{
        //    return _context.Bookmarks.Any(e => e.Id == id);
        //}
    }
}
