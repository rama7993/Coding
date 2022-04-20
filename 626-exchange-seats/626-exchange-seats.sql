# Write your MySQL query statement below

with new_table as (select count(*) as total from Seat) #total count
select (case
        when id%2=1  and total=id then id #if odd and last row
        when id%2=1  and total!=id then id+1 #if odd and not last row
        else id-1 #if even 
       end) as id,student
from Seat,new_table
order by id;

