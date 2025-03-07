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
    public class TicketsController : ControllerBase
    {
        private readonly HelpDeskDbContext _context;

        public TicketsController(HelpDeskDbContext context)
        {
            _context = context;
        }

        // GET: api/Tickets
        [HttpGet]
        public async Task<IActionResult> GetTickets()
        {
            
           List<Ticket> tickets = await _context.Tickets.ToListAsync();
            return Ok(tickets);
        }

        // GET: api/Tickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);

            if (ticket == null)
            {
                return NotFound();
            }

            return ticket;
        }

        // PUT: api/Tickets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicket(int id, int helpAgentId)
        {
            var ticketEntity = _context.Tickets.Where(t => t.Id == id).FirstOrDefault();
            ticketEntity.ResolvedBy = helpAgentId;
            ticketEntity.TicketOpen = false;
            var agentEntity = _context.HelpAgents.Where(a => a.Id == helpAgentId).FirstOrDefault();
            return Ok($"This ticket was resolved by agent {agentEntity.Name}");
        }

        // POST: api/Tickets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ticket>> PostTicket(TicketDto ticketDto)
        {

            var ticketEntity = new Ticket()
            {
                CustomerId = ticketDto.CustomerId,
                Title = ticketDto.Title,
                Body = ticketDto.Body,
                TicketOpen = true,
            };

            _context.Tickets.Add(ticketEntity);
            await _context.SaveChangesAsync();

            return Ok("Ticket Created");
        }

        // DELETE: api/Tickets/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteTicket(int id)
        //{
        //    var ticket = await _context.Tickets.FindAsync(id);
        //    if (ticket == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Tickets.Remove(ticket);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool TicketExists(int id)
        //{
        //    return _context.Tickets.Any(e => e.Id == id);
        //}
    }
}
