<?php namespace App\Controllers;

use App\Models\NewsModel;

class News extends BaseController
{
    public function index()
    {
        $model = new NewsModel();
    
        $data = [
            'news'  => $model->getAllNews()
        ];
        //var_dump($data);

        echo view('templates/header', $data);
        echo view('news/list_view', $data);
        echo view('templates/footer', $data);
    }


    public function create()
    {
        $model = new NewsModel();

        if ($this->request->getMethod() === 'post')
        {
            $rules = [
                'title' => 'required|min_lenght[3]|max_lenght[255]',
                'content' => 'required'
            ];
            
            $errors = [
                'title' => [
                    'required' =>'Otsikko ei voi olla tyhjä'
                ]
            ];

            if(! $this->validate($rules, $errors)){
                $data['validation'] = $this->validator;
            } else {

                $model->save([
                    'title' => $this->request->getPost('title'),
                    'content'  => $this->request->getPost('content'),
                    'user_id' => session()->get('id') 
                ]);
    
                $data = [
                    'message' => "lisääminen"
                ];
    
                echo view('templates/header');
                echo view('news/success', $data);
                echo view('templates/footer');
            }
 
        }
        echo view('templates/header');
        echo view('news/create');
        echo view('templates/footer');
    }

    public function delete($id = null)
    {
        $model = new NewsModel();
        $data['news'] = $model->where('id', $id)->delete($id);
        return redirect()->to(base_url('news'));
    }


    public function edit($id = null)
    {
        $model = new NewsModel();
 
        $data = [
            'news_item'  => $model->where('id', $id)->first()
        ];

        echo view('templates/header');
        echo view('news/edit', $data);
        echo view('templates/footer');
    }

    public function update($id = null)
    {
        $model = new NewsModel();

        if ($this->request->getMethod() === 'post' && $id !== null && $this->validate([
                'title' => 'required|min_length[3]|max_length[255]',
                'content'  => 'required'
            ]))
        {
            $newsdata = [
                'title' => $this->request->getPost('title'),
                'content'  => $this->request->getPost('content'),
            ];
            
            $model->update($id, $newsdata);

            $data = [
                'message' => "päivittäminen"
            ];

            echo view('templates/header');
            echo view('news/success', $data);
            echo view('templates/footer');
        }
        else
        {
            return $this->response->redirect(base_url('/news'));
        }
    }
}