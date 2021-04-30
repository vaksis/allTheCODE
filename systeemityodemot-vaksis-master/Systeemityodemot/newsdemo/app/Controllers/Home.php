<?php namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		//return view('my_welcome');

		$data = [        
			'name' => 'Vaksis'
		];
		echo view('templates/header', $data);
		echo view('my_welcome', $data);
		echo view('templates/footer', $data);
	}

	//--------------------------------------------------------------------

}
