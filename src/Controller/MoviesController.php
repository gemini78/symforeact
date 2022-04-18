<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MoviesController extends AbstractController
{
    #[Route('/coup-de-coeur', name: 'coups_movies')]
    #[Route('/', name: 'app_movies')]
    public function index(): Response
    {
        return $this->render('movies/index.html.twig');
    }
}
