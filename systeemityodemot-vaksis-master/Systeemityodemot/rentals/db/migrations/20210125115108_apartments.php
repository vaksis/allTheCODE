<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class Apartments extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change(): void
    {
        $table = $this->table('apartments');
        $table->addColumn('address', 'string')
            ->addColumn('type', 'string')
            ->addColumn('price', 'integer')
            ->addColumn('size', 'integer')
            ->addColumn('date', 'date')
            ->addColumn('landlord_id', 'integer')
            ->addForeignKey('landlord_id', 'landlords', 'id', array('delete'=> 'CASCADE', 'update'=> 'NO_ACTION'))
            ->create();
    }
}
