## Technical Questions ##

1. I spent roughly 5 hours on this assignment. If I had more time I would have added the ability to click on a restaurant and have google maps show the location in a modal or similar fashion.

2. I would say that destructuring assignment is one of the most usefull new features of Javascript. Here is how I've used it to create a swap method on a Heap class
`swap(array, parent, child){
   [this.storage[parent], this.storage[child]] = [this.storage[child], this.storage[parent]]
 };
`
3. I have not had to track down a significant performance issue in production during my career. How I would go about doing so would depend on how performance was being affected. I would check logs as well as debug using the React dev tools to try and find any bottlenecks. The first place I would start checking would be our API calls.

4. I would add customer ratings the the data returned from the restaurants endpoint as well as refine "area" to be more descriptive and accurate. The background images in my assesment were provided by the endpoint. I would have liked there to be restaurant images instead of placeholders.

5. 

`
{
    "name": "Cory",
    "hobby": "Powerlifting",
    "dog-name": "Tera",
    "tall": true,
    "loves-coding": true
}
`