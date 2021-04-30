<?php namespace App\Controllers;

use App\Models\UserModel;

class User extends BaseController
{
    private function setUserSession($user){
        $data = [
            'id' => $user['id'],
            'username' => $user['username'],
            'isLoggedIn' => true,
        ];
    
        session()->set($data);
        return true;
    }
    
    public function register()
    {
        $data = [];
        $model = new UserModel();

        if ($this->request->getMethod() === 'post'){

        $rules = [
                'username' => 'required|min_length[6]|max_length[255]|is_unique[users.username]',
                'password'  => 'required|min_length[8]|max_length[255]',
                'password2' => 'matches[password]'
        ];
        $errors = [
                'username' => [
                'required' => 'Käyttäjänimi ei voi olla tyhjä'
            ],
                'password' => [
                'required' => 'Salasana ei voi olla tyhjä'
                ],
        ];

        if(! $this->validate($rules, $errors)){
            $data['validation'] = $this->validator;
        } else {
            $model->save([
                'username' => $this->request->getPost('username'),
                'password'  => $this->request->getPost('password'),
            ]);
            session()->setFlashdata('success', 'Rekisteröinti onnistui');
            return redirect()->to('/user/login');
        }
    }
        echo view('templates/header');
        echo view('user/register');
        echo view('templates/footer');
    }

    public function login()
{
    $data = [];
    $model = new UserModel();

    if ($this->request->getMethod() === 'post'){
        $rules = [
            'username' => 'required|max_length[50]',
            'password' => 'required|max_length[255]|validateUser[username,password]',
        ];

        $errors = [
          'username' => [
          'required' => 'Käyttäjänimi ei voi olla tyhjä',
          'max_length' => 'käyttäjänimen pitää olla korkeintaan 255 merkkiä'
          ],
          'password' => [
          'validateUser' => 'Tarkista käyttäjänimi tai salasana'
          ]
        ];

        if (! $this->validate($rules, $errors)) {
            $data['validation'] = $this->validator;
        }else{
            $model = new UserModel();
            $user = $model->where('username', $this->request->getVar('username'))->first();
            $this->setUserSession($user);
            return redirect()->to('/');
        }
    }

    echo view('templates/header');
    echo view('user/login');
    echo view('templates/footer');
}

public function logout(){
    session()->destroy();
    return redirect()->to('/');
}
}