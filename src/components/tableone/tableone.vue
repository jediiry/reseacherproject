<template>
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
</template>

<script>
export default {
    name: 'tableone'
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

</style>