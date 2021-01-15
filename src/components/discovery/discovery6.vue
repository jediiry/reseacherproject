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

        <hall :submitButton="true" :imageButton="true"></hall>

        <div class="p-4">
            <!-- <div class="hallOfFame_tab flex flex-row mb-10">
                <a href="" class="text-lg text-gray-400 mr-10 lg:ml-10">Program details</a>
                <a href="" class="text-lg text-gray-400 mr-10">Announcement</a>
                <a href="" class="text-lg text-gray-400 active_tab">Hall of fame</a>
            </div> -->
            <tab></tab>

            <div>
                <h1 class="mb-2 text-2xl">Hall of Fame</h1>
                <span class="text-sm mb-7 text-gray-500">Thanks to the following researchers for reporting important security issues:</span>
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
import Hall from "@/components/hall/hall.vue";
import tab from './tabcomponent';

export default {
    name: 'discovery6',
    components: {
        mainheader,
        Hall,
        tab
    }
}
</script>

<style>

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

@media only screen and (max-width: 44.69em) { /** 715px / 16 */
    .hallOfFame_tab a {
        font-size: 14px;
    }
}
</style>