<?php

namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\InteractsWithSockets;

class FacultyUpload implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $userId;

    public function __construct($message, $userId)
    {
        $this->message = $message;
        $this->userId = $userId;
    }

    public function broadcastWith()
    {
        return ['message' => 'File Upload Successfully'];
    }

    public function broadcastOn()
    {
        return new PrivateChannel('faculty-upload.' . $this->userId);
    }

    public function broadcastAs()
    {
        return 'faculty-upload';
    }
}
