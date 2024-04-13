create table categories(
  id int auto_increment primary key,
  category varchar(50),
  par_cat_id int,
  created_on timestamp default now()
);

insert into categories (category) values ("Men"), ("Women"), ("Kids");

insert into categories (category, par_cat_id)
values ("Casual Wear", 1), ("Accessories", 3), ("Party Wear", 2), 
("Foot Wear", 2), ("Accessories", 2);

create table products (
  id int auto_increment primary key,
  pName varchar(50),
  cat_id int,
  prod_img text,
  price float
);

insert into products (
  pName,
  cat_id,
  prod_img,
  price
) values (
	"Jacket",
    4,
    "https://m.media-amazon.com/images/I/81iOSL3bIfL._AC_SX679_.jpg",
    45
), (
	"Shirt",
    4,
    "https://m.media-amazon.com/images/I/61JELqH2RvL._AC_SX679_.jpg",
    29
), (
	"Denim Jeans",
    4,
    "https://i.insider.com/64493a3790523900196ff87d?width=1005&format=jpeg&auto=webp",
    38
), (
	"Boots",
    7,
    "https://m.media-amazon.com/images/I/717LvSTNqQL._AC_SY695_.jpg",
    70
), (
	"Top",
    6,
    "https://m.media-amazon.com/images/I/51CFDAxtC3L._AC_SY879_.jpg",
    43.99
), (
	"Kid's Jacket",
    5,
    "https://oldnavy.gap.com/webcontent/0053/702/065/cn53702065.jpg",
    16.97
), (
	"Baby Boy Jeans",
    5,
    "https://i.etsystatic.com/7818429/r/il/577a78/1774992767/il_1588xN.1774992767_f507.jpg",
    27.54
), (
	"Baby Girl Shorts",
    5,
    "https://i.etsystatic.com/7818429/r/il/d797b1/2035296821/il_1588xN.2035296821_8v41.jpg",
    25.23
), (
	"Dress",
    8,
    "https://i.etsystatic.com/41903190/r/il/3cfbd1/4720065558/il_1588xN.4720065558_3xqw.jpg",
    5.19
), (
	"Athletic Shorts",
    8,
    "https://i5.walmartimages.com/seo/Ladies-Athletic-Shorts_759c6a11-a58d-4ada-9dc2-e9af00e39de1.7434ef624579b47034170ce38eeac83b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    35.99
);