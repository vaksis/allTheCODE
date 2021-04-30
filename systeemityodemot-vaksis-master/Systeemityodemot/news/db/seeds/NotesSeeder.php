<?php


use Phinx\Seed\AbstractSeed;

class NotesSeeder extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * https://book.cakephp.org/phinx/0/en/seeding.html
     */
    public function getDependencies()
    {
        return [
            'UsersSeeder'
        ];
    }

    public function run()
{
         $data = [
             [
                 'id'    => 1,
                 'title' => 'Hello',
                 'content' => 'message',
                 'created' => date('Y-m-d H:i:s'),
                 'expiry' => date('2021-12-31 00:00:00'), 
                 'user_id' => 1,
             ],
             [
                 'id'    => 2,
                 'title' => 'Hello 2',
                 'content' => 'message 2',
                 'created' => date('Y-m-d H:i:s'),
                 'expiry' => date('2021-12-31 00:00:00'), 
                 'user_id' => 2,
             ]
         ];

         $posts = $this->table('news');
         $posts->insert($data)
             ->saveData();
     }
}
