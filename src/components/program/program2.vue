<template>
    <div>
        <mainheader></mainheader>
        <div class="bg-light-gray pb-10">
            <div class="grid grid-cols-1 p-10">
                <div>
                    <p class="greeting-title">Good Afternoon Lawal!</p>
                </div>
            </div>
        </div>

        <div class="hallOfFame flex border border-gray-300 border-solid ml-2 mr-16">
            <div class="hallOfFame_left flex flex-col border-r border-gray-300 border-solid">
                <div class="p-5 pb-20">
                    <h1 class="text-lg mb-2">LogicBoxes / OrderBox</h1>
                    <span class="text-xs text-gray-400 block">OrderBox VDP</span>
                    <div class="mt-7 mb-3">
                        <img  class="inline mr-2" src="../../assets/icon/shop.svg" alt=""> 
                        <span class="mr-3">Points</span> 
                        <span class="text-xs text-gray-400">Per vulnerability</span>
                    </div>
                    <div class="mb-1">
                        <img class="inline mr-2" src="../../assets/icon/circle.svg" alt="">
                        <span>Partial safe harbour</span> 
                    </div>
                    <div>
                        <img class="inline mr-2" src="../../assets/icon/circle.svg" alt="">
                        <span>Managed by Teklabspace</span> 
                    </div>
                </div>
                <div class="hallOfFame_footer border-gray-300 border-solid border-t flex justify-between p-3">
                    <div class="hallOfFame_footer_box">
                        <button class="bg-green-900 text-white p-1 text-sm rounded">Submit Report</button>
                    </div>
                    <div class="hallOfFame_footer_box flex justify-end">
                        <img src="../../assets/icon/shop.svg" alt=""> 
                        <img class="inline mx-10" src="../../assets/icon/shop.svg" alt=""> 
                    </div>
                </div>
            </div>
            <div class="hallOfFame_right relative">
                <img class="absolute block top-1/2 left-1/2" src="./../../assets//teklabspcelogo.png" alt="">
            </div>
        </div>


        <div class="p-4">
            <div class="hallOfFame_tab flex flex-row mb-10">
                <a href="" class="text-lg text-gray-400 mr-10 px-3">Program details</a>
                <a href="" class="text-lg text-gray-400 mx-10 px-3">Hangar</a>
                <a href="" class="text-lg text-gray-400 mx-10 px-3 active_tab">Hall of fame</a>
            </div>

            <div>
                <h1 class="mb-10 pb-6 text-2xl">Hall of Fame</h1>

                <table class="hallOfFame_table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Researcher</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Semijor</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="flex items-center">
                                <img class="avatar rounded-full inline mr-3"
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                                alt=""> <span>Aliash</span>
                            </td>
                            <td class="text-red-600">40</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
</template>

<script>
import mainheader from "../header/header";

export default {
    name: 'program2',
    components: {
        mainheader
    }
}
</script>

<style>
.hallOfFame_left{
    flex: 2;
}

.hallOfFame_right{
    flex: 1;
}

.hallOfFame_right img {
    transform: translate(-50%, -50%);
}

.hallOfFame_footer_box {
    flex: 1;
}


table.hallOfFame_table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

table.hallOfFame_table th {
  background-color: #f2f2f2;
}

.hallOfFame_table th, td {
  text-align: left;
  padding: 16px;
}

.hallOfFame_table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.hallOfFame_table tr td:nth-child(3),
.hallOfFame_table tr th:nth-child(3) 
{
    text-align: right;
}

.active_tab{
    border-bottom: 3px solid #df74fa;
}
</style>