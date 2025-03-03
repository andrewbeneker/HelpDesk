using System;
using System.Collections.Generic;

namespace HelpDeskAPI.Entities;

public partial class Resolution
{
    public int Id { get; set; }

    public string ResolutionType { get; set; } = null!;

    public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
