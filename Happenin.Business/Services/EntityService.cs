﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Happnin.Business.Dto;
using Happnin.Data;
using Microsoft.EntityFrameworkCore;

namespace Happnin.Business.Services
{
    public abstract class EntityService<TDto, TInputDto, TEntity>: IEntityService<TDto, TInputDto>
        where TEntity: class, IEntityBase
        where TDto : class, TInputDto, IEntity
        where TInputDto : class 
    {
        protected AppDbContext ApplicationDbContext { get; }
        protected IMapper Mapper { get; }
        protected virtual IQueryable<TEntity> Query => ApplicationDbContext.Set<TEntity>();

        public EntityService(AppDbContext applicationDbContext, IMapper mapper)
        {
            ApplicationDbContext = applicationDbContext ?? throw new ArgumentNullException(nameof(applicationDbContext));
            Mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<bool> DeleteAsync(int id)
        {
            bool deleted = false;

            TEntity entity = await Query.FirstOrDefaultAsync(x => x.Id == id);
            if (entity is { })
            {
                var entityFromDb = ApplicationDbContext.Set<TEntity>().Remove(entity);
                deleted = entityFromDb.State == EntityState.Deleted;
            }
            await ApplicationDbContext.SaveChangesAsync();
            
            return deleted;
        }

        virtual public async Task<List<TDto>> FetchAllAsync()
        {
            return Mapper.Map<List<TEntity>, List<TDto>>(await Query.ToListAsync());
        }

        virtual public async Task<TDto> FetchByIdAsync(int id)
        {
            return Mapper.Map<TEntity, TDto>(await Query.FirstOrDefaultAsync(x => x.Id == id));
        }
           
        virtual public async Task<TDto> InsertAsync(TInputDto dto)
        {
            TEntity entity = Mapper.Map<TInputDto, TEntity>(dto);
            ApplicationDbContext.Add(entity);
            var returned = await ApplicationDbContext.SaveChangesAsync();
            return Mapper.Map<TEntity, TDto>(entity);
        }

        virtual public async Task<TDto> UpdateAsync(int id, TInputDto entity)
        {
            if (await Query.FirstOrDefaultAsync(x => x.Id == id) is TEntity result)
            {
                Mapper.Map(entity, result);
                await ApplicationDbContext.SaveChangesAsync();
                return Mapper.Map<TEntity, TDto>(result);
            }
            return null;
        }
    }
}