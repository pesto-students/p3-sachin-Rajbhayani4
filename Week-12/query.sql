"the item that has minimum weight" = SELECT min(Weight) FROM `items`;

"the different warehouses in “Pune”" = SELECT * FROM `warhouses` `w` INNER JOIN `city` `c` ON w.City_id = c.city_id WHERE city = 'pune';

"the details of items ordered by a customer “Mr. Patil”" = SELECT * FROM `customer` `c` INNER JOIN `orders` `o` ON c.CNO = o.C_id INNER JOIN `items` `i` ON i.ItemNo = o.Iteam_id WHERE Cname = 'Mr.Patil';
														= SELECT * FROM `customer` `c`, `orders` `o`, `items` `i` WHERE c.CNO = o.C_id  AND i.ItemNo = o.Iteam_id AND Cname = 'Mr.Patil'
														
"Warehouse which has maximum stores" = SELECT * FROM `warhouses` w INNER JOIN `stores` s ON s.W_id = w.WID GROUP BY Wname ORDER BY COUNT(Wname) ASC limit 1;

"item which is ordered for a minimum number of times" = SELECT * FROM `orders` o INNER JOIN `items` i ON o.Iteam_id = i.ItemNo GROUP BY Description ORDER BY COUNT(Description) ASC limit 1;

"the detailed orders given by each customer." = SELECT * FROM `orders` o, customer c WHERE o.C_id = c.CNO;

