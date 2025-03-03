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

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Resolution> Resolutions { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC075F397C00");

            entity.ToTable("Customer");

            entity.Property(e => e.Email).HasMaxLength(60);
            entity.Property(e => e.FirstName).HasMaxLength(30);
            entity.Property(e => e.LastName).HasMaxLength(30);
            entity.Property(e => e.Phone).HasMaxLength(15);
        });

        modelBuilder.Entity<Resolution>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Resoluti__3214EC07201F0BFA");

            entity.ToTable("Resolution");

            entity.Property(e => e.ResolutionType).HasMaxLength(25);
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ticket__3214EC07EEA4BE25");

            entity.ToTable("Ticket");

            entity.Property(e => e.ContactEmail).HasMaxLength(65);
            entity.Property(e => e.Title).HasMaxLength(40);

            entity.HasOne(d => d.Customer).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__Ticket__Customer__4222D4EF");

            entity.HasOne(d => d.Resolution).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.ResolutionId)
                .HasConstraintName("FK__Ticket__Resoluti__4316F928");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
