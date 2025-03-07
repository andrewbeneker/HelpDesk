using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskAPI.Entities;

public partial class HelpDeskDbContext : DbContext
{
    public HelpDeskDbContext()
    {
    }

    public HelpDeskDbContext(DbContextOptions<HelpDeskDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bookmark> Bookmarks { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<HelpAgent> HelpAgents { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bookmark>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Bookmark__3214EC0763CAF770");

            entity.Property(e => e.Description).HasMaxLength(60);

            entity.HasOne(d => d.HelpAgent).WithMany(p => p.Bookmarks)
                .HasForeignKey(d => d.HelpAgentId)
                .HasConstraintName("FK__Bookmarks__HelpA__5629CD9C");

            entity.HasOne(d => d.Ticket).WithMany(p => p.Bookmarks)
                .HasForeignKey(d => d.TicketId)
                .HasConstraintName("FK__Bookmarks__Ticke__5535A963");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC074A9C7B8A");

            entity.ToTable("Customer");

            entity.Property(e => e.Email).HasMaxLength(60);
            entity.Property(e => e.FirstName).HasMaxLength(30);
            entity.Property(e => e.LastName).HasMaxLength(30);
            entity.Property(e => e.Phone).HasMaxLength(15);
        });

        modelBuilder.Entity<HelpAgent>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__HelpAgen__3214EC071514E9E9");

            entity.ToTable("HelpAgent");

            entity.Property(e => e.Name).HasMaxLength(30);
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ticket__3214EC07431A979C");

            entity.ToTable("Ticket");

            entity.Property(e => e.Title).HasMaxLength(40);

            entity.HasOne(d => d.Customer).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__Ticket__Customer__5165187F");

            entity.HasOne(d => d.ResolvedByNavigation).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.ResolvedBy)
                .HasConstraintName("FK__Ticket__Resolved__52593CB8");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
