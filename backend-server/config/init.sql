create table categories(
	id int auto_increment primary key not null,
  category varchar(50) not null,
  par_cat_id int not null,
  created_on timestamp default now()
);

insert into categories (
  category
) values ("Men"), ("Women"), ("Kids");

insert into categories (
	category,
    par_cat_id
) values ("Party Wear",2), ("Foot Wear",2), ("Accessories",2), 
("Accessories",3), ("Jackets",3), ("Jackets",1), ("Shirts",1), 
("Jeans", 1);