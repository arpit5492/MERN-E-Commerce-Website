create table categories(
	id int auto_increment primary key not null,
  category varchar(50) not null,
  par_cat_id int not null,
  created_on timestamp default now()
);